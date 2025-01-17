<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Randeera Liyanage</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f8f9fa;
            padding: 10px 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        nav a {
            margin: 0 10px;
            text-decoration: none;
            color: #007bff;
        }

        nav a:hover {
            text-decoration: underline;
        }

        .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 20px;
        }

        section {
            padding: 20px;
            margin-bottom: 20px;
        }

        h1, h2 {
            text-align: center;
            color: #0056b3;
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            border-top: 1px solid #ddd;
            font-size: 14px;
        }

        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                align-items: flex-start;
            }

            nav a {
                margin: 5px 0;
            }

            section {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <nav>
        <div>Randeera Liyanage</div>
        <div>
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#resume">Resume</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <div class="container">
        <section id="about">
            <h1>About</h1>
            <p>I’m Darshana L Weerawarne, a Senior Lecturer at the Department of Physics, The University of Colombo, Sri Lanka. Other affiliations: <a href="https://www.binghamton.edu">Center for Advanced Microelectronics Manufacturing, Binghamton, USA</a>.</p>
        </section>

        <section id="research">
            <h2>Research Interest</h2>
            <ul>
                <li>Flexible Electronics: design, fabrication, and reliability</li>
                <li>Applied Optics: optical systems for research in flexible electronics</li>
                <li>Numerical computing: laser-assisted heating</li>
            </ul>
        </section>

        <section id="publications">
            <h2>Publications</h2>
            <p>Coming soon...</p>
        </section>

        <section id="resume">
            <h2>Resume</h2>
            <p>Coming soon...</p>
        </section>

        <section id="resources">
            <h2>Resources</h2>
            <p>Coming soon...</p>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>
        </section>
    </div>

    <footer>
        <p>© 2025 Darshana L Weerawarne. All rights reserved.</p>
        <p>Hosted on GitHub Pages — Theme by orderlist</p>
    </footer>
</body>
</html>
