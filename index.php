<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>TODO APP</title>
	<link rel="stylesheet"  href="style.css">
</head>
<?php require_once('config.php');
//$sql = "select * from sorting_record order by dislay_order";
//$datas = $mysqli->query($sql);
$sql = "Select * FROM sorting_record order by display_order";
$datas = $mysqli->query($sql);

?>
<body>
	<p class="message">Oops... Task's content cannot be EMPTY !!!</p>

	<div id="todo-block">
		<div class="todo-header">
			<h2>TODO LIST - APP</h2>
		</div>

		<div class="todo-body">
			<div class="add-block">
				<input class="add-text" type="text" placeholder="A task you want to complete">
				<button class="add-button">+</button>
			</div>

			<ul class="tasks" >
                <?php while ($data = $datas->fetch_assoc()){ ?>
				<li id="<?php echo $data['id'] ?>" class="task"  >
					<div class="task-cbx">
						<input type="checkbox" unchecked>
					</div>
					<div class="task-text"><?php echo $data['name'] ?></div>
					<div class="task-remove"></div>
				</li>
                <?php } ?>

			</ul>
		</div>
	</div>

	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
	<script src="script.js"></script>
</body>
</html>