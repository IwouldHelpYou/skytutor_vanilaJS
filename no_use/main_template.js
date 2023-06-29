let HTML = {
    display: (nickname) => {
        return `
    <!DOCTYPE html>
<html>
<head>
	<title>Homepage</title>
	<link rel="stylesheet" type="text/css" href="../css/style_main.css">
</head>
<body>
	<header>
		<h1>공사중⛏</h1>
		<nav>
			<ul>
				<li><a href="#">홈</a></li>
				<li><a href="#">메뉴1</a></li>
				<li><a href="#">메뉴2</a></li>
				<li><a href="#">메뉴3</a></li>
				<li id="login"> <a href="/login">${nickname}</a> </li>
			</ul>
		</nav>
	</header>
	
	<main>
		<section>
			<h2>소개</h2>
			<p>두근두근</p>
		</section>
		
		<section>
			<h2>기다려보세요</h2>
			<ul>
				<li>플랫폼</li>
				<li>개발</li>
			</ul>
		</section>
	</main>
	
	<footer>
		<p>&copy; 2023 My Website. All Rights Reserved.</p>
	</footer>
	
</body>
</html>
`;
}};

exports.foo = HTML;