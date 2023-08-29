export const schema = gql`
  type Artwork {
    id: Int!
    title: String!
    medium: String!
    description: String
    price: Int
    public: Boolean!
    duration: Int
    sizeH: Float
    sizeW: Float
    sizeD: Float
    location: String!
    active: Boolean!
    userId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    User: User!
  }

  type Query {
    artworks: [Artwork!]! @requireAuth
    artwork(id: Int!): Artwork @requireAuth
  }

  input CreateArtworkInput {
    title: String!
    medium: String!
    description: String
    price: Int
    public: Boolean!
    duration: Int
    sizeH: Float
    sizeW: Float
    sizeD: Float
    location: String!
    active: Boolean
  }

  input UpdateArtworkInput {
    title: String
    medium: String
    description: String
    price: Int
    public: Boolean
    duration: Int
    sizeH: Float
    sizeW: Float
    sizeD: Float
    location: String
    active: Boolean
  }

  type Mutation {
    createArtwork(input: CreateArtworkInput!): Artwork! @requireAuth
    updateArtwork(id: Int!, input: UpdateArtworkInput!): Artwork! @requireAuth
    deleteArtwork(id: Int!): Artwork! @requireAuth
  }
`
