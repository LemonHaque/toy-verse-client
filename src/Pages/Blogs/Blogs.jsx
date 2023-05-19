
const Blogs = () => {
    return (

        <div className='my-20 sm:mx-10 lg:mx-20'>
            <h2 className='font-semibold text-6xl text-center text-purple-600 mb-6'>Blogs</h2>
            <h3 className='font-semibold mb-4 text-lg'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p className='mb-6'><strong>Ans: Access Token: </strong>
                An access token is a credential that is used to authenticate and authorize a user or an application when making requests to access protected resources on a server. It contains information about the user or application and permissions granted. Access tokens are usually short-lived and have an expiration time to enhance security.
                <br />

                <strong >Refresh Token: </strong>
                A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is used to maintain the user's authenticated session without requiring them to re-enter their credentials every time the access token expires. Refresh tokens are typically associated with longer expiration times compared to access tokens.
                <br />
                <strong>How they work: </strong>
                When a user or an application authenticates and is granted access, both an access token and a refresh token are issued by the authentication server. The access token is included in the requests to access protected resources, while the refresh token is securely stored by the client-side application.

            </p>
            <h3 className='font-semibold mb-4 text-lg'>2. Compare SQL and NoSQL databases?</h3>
            <p className='mb-6'><strong>Ans: </strong> SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems with distinct characteristics and use cases. Here's a comparison between SQL and NoSQL databases:
                <br />

                <strong>SQL:</strong> SQL databases follow a rigid, predefined schema that defines the structure of the data, such as tables, columns, and relationships. They use a tabular format to store data, enforcing consistency and data integrity.SQL databases are generally vertically scalable, meaning they can handle increased workload by adding more resources to a single server, such as CPU, RAM, or storage. <br />
                <strong>NoSQL:</strong> NoSQL databases offer a flexible schema or schema-less design. They can handle unstructured, semi-structured, and structured data. NoSQL databases employ various data models, including key-value, document, columnar, and graph, allowing greater flexibility and scalability.NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers, allowing for seamless scaling by adding more nodes to the database cluster.

            </p>
            <h3 className='font-semibold mb-4 text-lg'>3. What is express js? What is Nest JS?</h3>
            <p className='mb-6'><strong>Ans: </strong>
                <strong>Express.js</strong> is a lightweight and flexible web application framework for Node.js. It simplifies the development of web applications and APIs by providing a robust set of features, including routing, middleware support, templating, and static file serving. It is widely used and popular in the Node.js community. <br />

                <strong>NestJS</strong> is a popular open-source web application framework for Node.js. It emphasizes modularity, follows Angular-like patterns, and supports TypeScript. With features like dependency injection and decorators, NestJS helps in building scalable and maintainable server-side applications.</p>
            <h3 className='font-semibold mb-4 text-lg'>4. What is MongoDB aggregate and how does it work?</h3>
            <p className='mb-6'><strong>Ans: </strong> The MongoDB aggregate function is used to perform advanced data aggregation operations on collections. It works by processing data through a pipeline of stages, where each stage performs a specific operation on the data. The stages can include filtering, sorting, grouping, projecting, and performing calculations. The result is obtained by executing the pipeline and retrieving the transformed or aggregated data. It allows for complex data manipulations and calculations within MongoDB, enabling efficient processing of large data sets and generating meaningful insights.</p>
        </div>
    );
};

export default Blogs;