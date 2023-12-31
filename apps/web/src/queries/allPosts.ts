import gql from 'graphql-tag'
import sendRequest from '@/core/sendRequest'

export interface PostQuery {
  id: number
  title: string
  content: string
  user: {
    name: string
  }
}

export interface PostsQuery {
  posts: PostQuery[]
}

export const fetchPosts = async (): Promise<PostsQuery> => {
  const query = gql`
    query GetPosts {
      posts {
        id
        title
        content
        user {
          name
        }
      }
    }
  `
  return sendRequest<PostsQuery>(query)
}
