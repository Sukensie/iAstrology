<script>
    let username = "";
    let password = "";


    const handleSubmit=(e)=>{
       let loginFields={username,password};

	   console.log(loginFields)
    }


</script>

<h1>iAstrology</h1>

<form on:submit|preventDefault="{handleSubmit}">
    <input
      class="form-field"
      bind:value="{username}"
      placeholder="Username"
      required
    />
    <input
      class="form-field"
      bind:value="{password}"
      type="password"
      placeholder="Password"
      required
    />
   <!--<a href="./admin">--><button class="form-field">
      Login
    </button>
  </form>