<script>
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<h1>iAstrology</h1>

<form action="" method="post">
	  {#if form?.incorrect}
      <p class="error">Nesprávné údaje!</p>
    {/if}

    <input
      class="form-field"
      placeholder="Username"
      required
      name="username"
    />
    <input
      class="form-field"
      type="password"
      placeholder="Password"
      required
      name="password"
    />
    <button class="form-field">Login</button>
  </form>