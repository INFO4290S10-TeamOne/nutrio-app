import axios from 'axios';
import { useQuery } from 'react-query';
import { ToastAlert } from '../components/ToastAlert';
import { useToast } from 'native-base';
import { SpoonacularRecipeInformation } from '../types/spoonacular';
import { SPOONACULAR_API_KEY, SPOONACULAR_URL } from '@env';

export const useSpoonacularRecipeInformation = (id: number) => {
  const toast = useToast();
  const { data, isLoading, isError } = useQuery(
    ['recipe', id],
    async (): Promise<SpoonacularRecipeInformation | null> => {
      try {
        const { data } = await axios.get<SpoonacularRecipeInformation>(
          `${SPOONACULAR_URL}/recipes/${id}/information`,
          {
            params: {
              apiKey: SPOONACULAR_API_KEY,
              includeNutrition: true,
            },
          }
        );
        return data;
      } catch (error) {
        return null;
      }
    },
    {
      onError: () => {
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title='Error'
              description="Couldn't load recipe"
              variant='top-accent'
              status='error'
            />
          ),
        });
      },
    }
  );

  return { data, isLoading, isError };
};
