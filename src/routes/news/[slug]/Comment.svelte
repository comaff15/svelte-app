<script>
    import { enhance } from '$app/forms'

    export let comment;
    export let user;
</script>

<section class="card">
    <div class="card-block">
        <p class="card-text">{comment.body}</p>
    </div>
    <div class="card-footer">
        <a href="/profile/{comment.author.login}" class="comment-author">
			{comment.author.login}
		</a>

		<!-- <span class="date-posted">{new Date(comment.createdAt).toDateString()}</span> -->

		{#if user && comment.author.login === user.login}
			<form use:enhance method="POST" action="?/deleteComment&id={comment.id}" class="mod-options">
				<button class="ion-trash-a" aria-label="Delete comment" />
			</form>
		{/if}
    </div>
</section>

<style>
	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		font-size: inherit;
		margin-left: 5px;
		opacity: 0.6;
		cursor: pointer;
	}
</style>