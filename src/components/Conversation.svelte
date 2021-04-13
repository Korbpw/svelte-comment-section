<script>
  import {store} from '../store/store'
  import CommentSection from "./CommentSection.svelte";
  $: amount = $store[0].comments.length

  
</script>

<style>
  header {
    margin: 20px 20px 0 20px;
    display: flex;
  }
  h1 {
    font-size: 25px;
    line-height: 10px;
  }
  h3 {
    color: var(--secondary);
    font-weight: 400;
    font-size: 15px;
    margin-left: 10px;
    align-self: flex-end;
  }
  hr {
    margin: 0 20px;
    border-top: 1px solid #f8f8f8;
  }
</style>

<main>
  <header>
    <h1>Conversation</h1>
    <h3>{amount}{amount > 1 ? " comments" : " comment" }</h3>
  </header>
  <hr/>
</main>


<CommentSection/>