import OrderForm from "./OrderForm/OrderForm";

function App() {

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const form = event.currentTarget;

  //   const formData = new FormData(form);

  //   const username = formData.get('username');
  //   const password = formData.get('password');
  //   console.log({ username, password });

  //   form.reset();
  // };

  return (
    <>
      <h1>Form</h1>
      <OrderForm />
      <OrderForm />

      
      {/* <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" />
        </div>
        <div>
          <input type="password" name="password" />
        </div>

        <button type="submit">Submit</button>
      </form> */}
    </>
  );
}

export default App;
