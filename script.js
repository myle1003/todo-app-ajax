$(document).ready(function() {
	let btnAdd = $('.add-button');
	// let btnRemove = $('.tasks','.task-remove');
	let input = $('.add-text');
	let message = $('.message');
	let tasks = $('.tasks');

	btnAdd.on('click', function(){
		if(input.val()){
			addNewTask();

			message.css('visibility','hidden');

		} else {
			message.css('visibility','visible');
		}
	});

	input.keyup(function(e){
		if(input.val()){
			message.css('visibility', 'hidden');
			if(e.which === 13){
				addNewTask();
			}

		} else {
			message.css('visibility', 'visible');

		}
	});

	tasks.on('click','.task-remove', function(){
		let confirmed = confirm('Click Ok to remove this task');
		if(confirmed){
			$(this).parent().remove();
		}
	});

	tasks.on('click','.task-cbx input', function(){
		$(this).parent().next().toggleClass('task-done')
	});


    	$( ".tasks" ).sortable({
			delay:150,
			stop:function (){
				var selectedData = new Array();
				$(".task").each(function (){
					selectedData.push($(this).attr("id"))
				});
				updateTask(selectedData);

			}
		});

	function addNewTask(){
	let newTask = `<li class="task">
					<div class="task-cbx">
						<input type="checkbox" unchecked>
					</div>
					<div class="task-text">${input.val()}</div>
					<div class="task-remove"></div>
				</li>`;
			tasks.append(newTask);
			// insertTask(input.val());
			input.val('');
	};

		function updateTask(aData){
		$.ajax({
			url: 'ajaxPost.php',
			type: 'POST',
			data: {
				allData: aData
			},
			success: function(){
				alert("Your change successfully savsed!!!!");
			}
		});
	}

})

