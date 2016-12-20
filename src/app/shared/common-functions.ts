export class CommonFunctions{
  constructor (){}
  moveLabelUp(string) {
      let label = document.getElementById("label-" + string);
      label.classList.add('active');
  }
  moveLabelDown(string) {
      let input = (<HTMLInputElement>document.getElementById(string)).value;
      if (input === '' || input === 'blank') {
          let label = document.getElementById("label-" + string);
          label.classList.remove('active');
      }
  }

  changeAttributeInput(inputId, typeOfChange) {
      let input = (<HTMLInputElement>document.getElementById(inputId));
      input.type = typeOfChange;
      this.moveLabelUp(inputId);
  }

  togglePanel(panelId, arg) {
    if (arg){
      (<HTMLInputElement>document.getElementById(panelId)).hidden = true;
    } else {
      (<HTMLInputElement>document.getElementById(panelId)).hidden = false;
    }

  }
}
