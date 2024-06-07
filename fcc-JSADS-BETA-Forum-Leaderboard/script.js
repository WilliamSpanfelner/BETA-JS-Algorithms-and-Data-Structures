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

const showLatestPosts = (data) => {};
