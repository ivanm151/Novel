import { Link } from "react-router-dom";

export default function Articles() {
    const stories = {
        story1: [
            { id: "art1", title: "Трагедия Ванечки: история запретной любви" },
            { id: "art2", title: "Архитектура скорби: тайны особняка Федоровского" },
            { id: "art3", title: "Научный институт с привидением" },
        ],
        // Можешь добавить другие истории, например story2 и т.д.
    };

    return (
        <div className="container">
            <h1>Статьи по историям</h1>
            {Object.entries(stories).map(([storyId, articles]) => (
                <div key={storyId} className="story-block">
                    <h2>{storyId}</h2>
                    <ul>
                        {articles.map((article) => (
                            <li key={article.id}>
                                <Link to={`/articles/${storyId}/${article.id}`}>
                                    {article.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/">← Назад на главную</Link>
                </div>
            ))}

            <style jsx>{`
        .container {
          font-family: 'Georgia', serif;
          background-color: #f9f5f0;
          color: #3b2f2f;
          padding: 2rem;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          border: 1px solid #d9c8b4;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(100, 75, 50, 0.1);
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #2c1f1f;
        }

        .story-block {
          margin-bottom: 2rem;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid #cbb89d;
          padding-bottom: 0.5rem;
          text-transform: capitalize;
        }

        ul {
          padding-left: 1.5rem;
        }

        li {
          margin-bottom: 0.5rem;
        }

        a {
          text-decoration: none;
          color: #5a3e36;
        }

        a:hover {
          text-decoration: underline;
          color: #8c5c4b;
        }
      `}</style>
        </div>
    );
}
