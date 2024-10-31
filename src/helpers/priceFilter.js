const subHandler = (ev, router) => {
  ev.preventDefault();
  //? set values
  const min = ev.target[0].value;
  const max = ev.target[1].value;
  //? value validation
  if (!min || !max) {
    alert("Error : Enter Values");
    return;
  }
  if (+min > +max) {
    alert("Error : Min > Max");
    return;
  }
  //? navigate to route
  router.push(`/filter/${min}/${max}`);
};

export default subHandler;
