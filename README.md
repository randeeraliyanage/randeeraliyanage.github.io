<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Darshana L Weerawarne</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333;
        }
        header {
            background: #f4f4f4;
            padding: 1rem 0;
            border-bottom: 2px solid #ddd;
        }
        nav {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }
        nav a {
            text-decoration: none;
            color: #007acc;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .container {
            max-width: 800px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        .about {
            display: flex;
            align-items: center;
        }
        .about img {
            border-radius: 50%;
            margin-left: 1rem;
            width: 120px;
            height: 120px;
        }
        h2 {
            color: #007acc;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            margin: 0.5rem 0;
        }
        footer {
            text-align: center;
            margin-top: 2rem;
            padding: 1rem 0;
            background: #f4f4f4;
            border-top: 2px solid #ddd;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#resume">Resume</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <div class="container">
        <section id="about">
            <h2>About Me</h2>
            <div class="about">
                <p>
                    I’m Darshana L Weerawarne, a Senior Lecturer at the Department of Physics, The University of Colombo, Sri Lanka.<br>
                    Other affiliations: <a href="https://www.example.com" target="_blank">Center for Advanced Microelectronics Manufacturing, Binghamton, USA</a>
                </p>
                <img src="profile.jpg" alt="Darshana L Weerawarne">
            </div>
        </section>

        <section id="research">
            <h2>Research Interest</h2>
            <ul>
                <li>Flexible Electronics; design, fabrication, and reliability</li>
                <li>Applied Optics; optical systems for research in flexible electronics</li>
                <li>Numerical computing; laser-assisted heating</li>
            </ul>
        </section>

        <section id="publications">
            <h2>Publications</h2>
            <p>Coming soon...</p>
        </section>

        <section id="resume">
            <h2>Resume</h2>
            <p>Download my <a href="resume.pdf" target="_blank">Resume (PDF)</a>.</p>
        </section>

        <section id="resources">
            <h2>Resources</h2>
            <p>Curated links and tools will be added here.</p>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:darshana@example.com">darshana@example.com</a></p>
        </section>
    </div>

    <footer>
        <p>&copy; 2025 Darshana L Weerawarne. All rights reserved.</p>
    </footer>
</body>
</html>
