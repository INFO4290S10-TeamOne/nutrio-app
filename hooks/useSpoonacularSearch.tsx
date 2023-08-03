import { SPOONACULAR_API_KEY, SPOONACULAR_URL } from '@env';
import axios from 'axios';
import { useQuery } from 'react-query';
import { SpoonacularRecipe, SpoonacularResponse } from '../types/spoonacular';
import { useToast } from 'native-base';
import { ToastAlert } from '../components/ToastAlert';

export const useSpoonacularSearch = (query: string) => {
  const toast = useToast();
  const { data, isLoading, isError, refetch } = useQuery(
    ['search', query],
    async (): Promise<SpoonacularRecipe[]> => {
      try {
        const { data } = await axios.get<SpoonacularResponse>(
          `${SPOONACULAR_URL}/recipes/complexSearch`,
          {
            params: {
              apiKey: SPOONACULAR_API_KEY,
              query: query,
              number: 10,
            },
          }
        );

        return data.results;
      } catch (error) {
        return [];
      }
    },
    {
      onSuccess: (data) => {
        if (!data?.length) {
          toast.show({
            render: ({ id }) => (
              <ToastAlert
                id={id}
                title='No recipes found'
                description='Try another search'
                variant='top-accent'
                status='warning'
              />
            ),
          });
        }
      },
      onError: () => {
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title='Error'
              description="Couldn't load recipes"
              variant='top-accent'
              status='error'
            />
          ),
        });
      },
      enabled: false,
    }
  );

  return { data, isLoading, isError, refetch };
};
