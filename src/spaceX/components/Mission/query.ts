import gql from 'graphql-tag'

export const MissionInfo = gql`
query MissionInfo {
    launches {
      mission_name
      mission_id
      links {
        flickr_images
        video_link
      }
      launch_success
      launch_year
    }
  }  
`