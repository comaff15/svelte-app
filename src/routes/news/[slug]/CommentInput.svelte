<script>
	import { enhance } from '$app/forms';

</script>

<form use:enhance method="POST" action="?/createComment" class="card comment-form">
	<div class="card-block">
		<textarea class="form-control" name="comment" placeholder="Write a comment..." rows="3" />
	</div>

	<div class="card-footer">
		<button class="btn btn-sm btn-primary" type="submit">Post Comment</button>
	</div>
</form>