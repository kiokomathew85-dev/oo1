import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blog from "./blog";

function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About about={blog.about} />
      <ArticleList articles={blog.articles} />
    </div>
  );
}

export default App;