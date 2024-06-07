const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

const fetchData = async () => {
    try {
        // await waits for a promise to resolve and returns the result
        const res = await fetch(forumLatest);
        // convert res into json
        const data = await res.json();
        // view results
        // console.log(data);
        showLatestPosts(data);
    } catch (err) {
        console.log(err);
    }
};
// Call fetchData to see results
fetchData();

const showLatestPosts = (data) => {
    const {topic_list, users} = data;
    const {topics} = topic_list;
    postsContainer.innerHTML = topics.map((item)=>{
        const {id, title, views, posts_count, slug, posters, category_id, bumped_at} = item;
        return `<tr></tr>`;
    });
};
