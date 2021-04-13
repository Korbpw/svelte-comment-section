<script>
  import { fade, slide } from 'svelte/transition';
  import {store} from '../store/store'
  import Comment from './Comment.svelte'
  import { flip } from 'svelte/animate'
  

  let order = true, comment
  $:  sortedComments = $store[0].comments
  
  const handleOrder = (data) => {
    if(!order) return sortedComments = data.sort((a, b) => new Date(a.date) - new Date(b.date)) 
    return sortedComments = data.sort((a, b) => new Date(b.date) - new Date(a.date)) 
  };

  const submitComment = (e) => {
    e.preventDefault()
    if (!comment) return;
    let comments = $store[0].comments
    let newComment = {
      "id": comments.length,
      "user": $store[0].user.name,
      "content": comment,
      "date": new Date()
    }
    $store[0].comments = [newComment,...comments]
    sortedComments = handleOrder($store[0].comments)
    comment = ""
  }            
</script>

<style>
  .dropbtn {
    padding: 0px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    color: var(--secondary);
    transition: 200ms;
  }
  .dropdown {
    font-size: 14px;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
    color: var(--secondary);
  }
  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
  }
  .dropdown-content a {
    cursor: pointer;
    color: var(--secondary);
    padding: 1px 1px;
    text-decoration: none;
    display: block;
    margin-right: 67px;
    transition: 200ms;
  }
  .dropdown-content a:hover {color: var(--primary);}
  .dropdown span::after{
    content: " ˅";
    
  }
  .dropdown:hover .dropdown-content {
    display: flex;
    justify-content: flex-end;
  }

  .dropdown:hover span::after {
    content: " ˄";
    color: var(--primary);
    transition: 200ms;
  }

  .dropdown .dropbtn {background-color: transparent;}
  .dropdown:hover > .dropbtn{
    color: var(--primary);
    transition: 200ms;
  }
  main{
    margin: 0 20px;
  }

  h3 {
    color: var(--primary);
    font-weight: 700;
    font-size: 15px;
  }

  form input {
    border-radius: 5px;
    border: none;
    -webkit-box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.15); 
    box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.15);
    height: 50px;
    width: 100%;
    padding: 20px;
    color: var(--primary);
  }
  form input::placeholder {color: var(--secondary);}
</style>

<main>
  <h3>{$store[0].user.name}</h3>

  <form on:submit={submitComment}>
    <input type="text" id="input-text" placeholder="What do you think?" bind:value={comment}>
  </form>

  <div class="dropdown">
    Sort by
    <button class="dropbtn">{order ? "Newest" : "Oldest"}</button><span id="arrow"></span>
    <div class="dropdown-content">
      <a on:click={()=>order = !order} on:click={handleOrder(sortedComments)} >{order ? "Oldest" : "Newest"}</a>
    </div>
  </div>

  {#each sortedComments as data}
    <div transition:slide|local>
      <Comment data={data}/>
    </div>
  {/each}
</main>