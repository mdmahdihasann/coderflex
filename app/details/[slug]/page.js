import Details from '@/components/Details'
import database from "@/database/videos.json";
import { slugify } from '@/utils/Slugify';

const DetailsPage = ({params}) => {
  const {slug} = params;
  const video = database.find((video)=> slug === slugify(video.videoTitle))
  console.log(video);
  
  return (
    <Details video={video}/>
  )
}

export default DetailsPage