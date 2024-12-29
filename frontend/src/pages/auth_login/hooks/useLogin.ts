import { useMutation } from "@apollo/client"

import { LoginInput } from "~/graphql/types"
import { LOGIN_MUTATION } from "../graphql/LoginQueries"
import { LoginMutation, LoginMutationVariables } from "../graphql/LoginQueries.generated"

const useLogin = () => {
  const [_login, { loading, error }] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION)

  const loginUser = async (
    loginInput: LoginInput, 
    onSuccess?: (data: LoginMutation) => void,
    onError?: (error: any) => void
  ) => {
    await _login({
      variables: { loginInput },
      onCompleted: (data) => {
        onSuccess && onSuccess(data)
      },
      onError: (error) => {
        onError && onError(error)
      }
    })
  }

  return { loginUser, loading, error }
}


export default useLogin