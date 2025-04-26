import { Link } from "react-router-dom";

export default function Articles() {
    const stories = {
        story1: {
            name: "Институт онкологии научного центра РАМН",
            articles: [
                { id: "art1", title: "Трагедия Ванечки: история запретной любви" },
                { id: "art2", title: "Архитектура скорби: тайны особняка Федоровского" },
                { id: "art3", title: "Научный институт с привидением" },
            ],
        },
        story2: {
            name: "Краеведческий музей",
            articles: [
                { id: "art1", title: "Золото и призраки: наследие Асташева" },
                { id: "art2", title: "Перестройка особняка: что скрыли стены?" },
                { id: "art3", title: "Александра Павловна: проклятие или память?" },
            ],
        },
        story3: {
            name: "Вампирский дом",
            articles: [
                { id: "art1", title: "Кровавый аристократ: правда или вымысел?" },
                { id: "art2", title: "Подвал ужасов: что обнаружило следствие" },
                { id: "art3", title: "Проклятие шпаги" },
            ],
        },
    };

    return (
        <div className="container">
            <h1>Статьи по историям</h1>
            {Object.entries(stories).map(([storyId, story]) => (
                <div key={storyId} className="story-block">
                    <h2>{story.name}</h2>
                    <ul>
                        {story.articles.map((article) => (
                            <li key={article.id}>
                                <Link to={`/articles/${storyId}/${article.id}`}>
                                    {article.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <Link to="/">← Назад на главную</Link>

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
                    text-transform: none;
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
