function SeacrhInput({ setValue , className}) {
  return (
    <div className={className}>
      <form className="mt-10 flex justify-center gap-x-4">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="seacrh product..."
          name="product-input"
          className="w-96 height-2 p-2 rounded-md outline-none"
        />
      </form>
    </div>
  );
}

export default SeacrhInput;
