import axios from "axios";

const getPostData = async (params) => {
    try{
        const {data} = await axios.get(`http://localhost:5000/api/posts/${params.postSlug}` , {catch : "no-store"});
        return data;
    }catch(err){
        console.error(err)
    }
}

const PostPage = async ({params}) => {
    const post =  await getPostData(params);
    console.log(post)
    return (
        <div>blog page</div>
    );
}
 
export default PostPage;