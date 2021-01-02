import gql from "graphql-tag";

export const LaunchProfile = gql`
      query LaunchProfile($id: String) {
        launch(id: $id) {
          mission_name
          rocket {
            rocket_name
          }
          launch_year
          launch_success
          id
          details
          launch_site {
            site_name_long
          }
          links {
            flickr_images
          }
        }
      }
`