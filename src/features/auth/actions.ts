'use server';
 
import { signIn } from '@/src/auth';
import { AuthError } from 'next-auth';
import { SignInInput } from './schemas';
 
// ...
 
export async function signInAction(
  prevState: SignInInput,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}