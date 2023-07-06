import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TableA from 'src/app/models/table-a';
import TableB from 'src/app/models/table-b';
import TableC from 'src/app/models/table-c';
import { RebaService } from 'src/app/services/reba.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  constructor(private rebaService:RebaService, private router:Router) { }
  tableADto:TableA = new TableA();
  tableAScore:number = 0;
  tableBDto:TableB = new TableB();
  tableBScore:number = 0;
  tableCDto:TableC = new TableC();
  rebaScore:number = 0;
  riskMessage:string = '';
  count:number = 1;
  deneme:boolean = true;
  neckOptions=[
    {value:1,name:"/assets/foto/Step1/step1-1.png"},
    {value:2,name:"/assets/foto/Step1/step1-2.png"},
    {value:7,name:"/assets/foto/Step1/step1-3.png"}
  ];
  neckSelected:number=0;
  neckCheckbox1:boolean=false;
  neckCheckbox2:boolean=false;

  trunkOptions=[
    {value:1,name:"/assets/foto/Step2/step2-1.png"},
    {value:2,name:"/assets/foto/Step2/step2-2.png"},
    {value:7,name:"/assets/foto/Step2/step2-3.png"},
    {value:3,name:"/assets/foto/Step2/step2-4.png"},
    {value:4,name:"/assets/foto/Step2/step2-5.png"}
  ]
  trunkSelected:number=0;
  trunkCheckbox1:boolean=false;
  trunkCheckbox2:boolean=false;
  legOptions=[
    {value:1,name:"/assets/foto/Step3/step3-1.png"},
    {value:2,name:"/assets/foto/Step3/step3-2.png"}
  ]
  legSelected:number=0;
  legCheckbox1:boolean=false;
  legCheckbox2:boolean=false;

  tableAOptions=[
    {value:"A",name:"If load <11 lbs"},
    {value:"B",name:"If load 11 to 22 lbs"},
    {value:"C",name:"If load >22 lbs"}
  ]
  tableAOption:string='';
  shockOrRapid:boolean=false;

  upperArmOptions=[
    {value:1,name:"/assets/foto/Step5/step5-1.png"},
    {value:2,name:"/assets/foto/Step5/step5-2.png"},
    {value:7,name:"/assets/foto/Step5/step5-3.png"},
    {value:3,name:"/assets/foto/Step5/step5-4.png"},
    {value:4,name:"/assets/foto/Step5/step5-5.png"}
  ]
  upperArmSelected:number=0;
  upperArmCheckbox1:boolean=false;
  upperArmCheckbox2:boolean=false;
  upperArmCheckbox3:boolean=false;

  lowerArmOptions=[
    {value:1,name:"/assets/foto/Step6/step6-1.png"},
    {value:2,name:"/assets/foto/Step6/step6-2.png"},
  ]
  lowerArmSelected:number=0;

  wristOptions=[
    {value:1,name:"/assets/foto/Step7/step7-1.png"},
    {value:2,name:"/assets/foto/Step7/step7-2.png"},
  ]
  wristSelected:number=0;
  wristCheckbox:boolean=false;

  tableBOptions = [
    {value:"A",name:"Well fitting handle and mid range power grip."},
    {value:"B",name:"Acceptable but not ideal hand hold or coupling."},
    {value:"C",name:"Hand hold not acceptable, but possible."},
    {value:"D",name:"No handles, awkward, unsafe with any body part."},
  ]
  tableBOption:string='';

  tableCCheckbox1:boolean=false;
  tableCCheckbox2:boolean=false;
  tableCCheckbox3:boolean=false;


  ngOnInit(): void {
  }

  goBackToTheFirstPage(){
    this.count = 1;
  }
  goBackToTheSecondPage(){
    this.count = 2;
  }
  goToSecondPage(){
    let errorMessage:string = "All body parts must be selected for calculation. <br><br> Missing part(s) : ";
    if(this.neckSelected == 7){
      this.tableADto.neckScore = 2
    }
    else {
    this.tableADto.neckScore = this.neckSelected;
    }
    if(this.neckCheckbox1 == true){
      this.tableADto.neckScore++;
    }
    if(this.neckCheckbox2 == true){
      this.tableADto.neckScore++;
    }

    if(this.trunkSelected == 7){
      this.tableADto.trunkScore = 2
    }
    else {
    this.tableADto.trunkScore = this.trunkSelected;
    }

    if(this.trunkCheckbox1 == true){
      this.tableADto.trunkScore++;
    }
    if(this.trunkCheckbox2 == true){
      this.tableADto.trunkScore++
    }

    this.tableADto.legScore = this.legSelected;
    if(this.legCheckbox1 == true){
      this.tableADto.legScore++
    }
    if(this.legCheckbox2 == true){
      this.tableADto.legScore++;
      this.tableADto.legScore++;
    }

    this.tableADto.tableAOption = this.tableAOption;
    this.tableADto.shockOrRapid = this.shockOrRapid;

    if(this.neckSelected == 0){
      errorMessage = errorMessage + "<br>Neck"
    }
    if(this.trunkSelected == 0){
      errorMessage = errorMessage + "<br>Trunk"
    }
    if(this.legSelected == 0){
      errorMessage = errorMessage + " <br>Legs"
    }
    this.rebaService.tableACalculation(this.tableADto).subscribe(res => {
      if(!res || res == null){
      Swal.fire({
        title:'Error!',
        icon:'error',
        confirmButtonText:'OK',
        html:errorMessage + "<br><br> Also check the adjustments. They must be chosen correctly."
      })
    }
    else {
      localStorage.setItem("tableA",res.toString())
      this.tableAScore = res;
      console.log(localStorage.getItem("tableA"))
      this.count = 2;
    }
    })
  }
  goToThirdPage(){
    let errorMessage:string = "All body parts must be selected for calculation. <br><br> Missing part(s) : ";
    if(this.upperArmSelected == 7){
      this.tableBDto.upperArmScore = 2
    }
    else {
    this.tableBDto.upperArmScore = this.upperArmSelected;
    }
    if(this.upperArmCheckbox1 == true){
      this.tableBDto.upperArmScore++;
    }
    if(this.upperArmCheckbox2 == true){
      this.tableBDto.upperArmScore++;
    }
    if(this.upperArmCheckbox3 == true){
      this.tableBDto.upperArmScore--;
    }

    this.tableBDto.lowerArmScore = this.lowerArmSelected;

    this.tableBDto.wristScore = this.wristSelected;
    if(this.wristCheckbox == true){
      this.tableBDto.wristScore++;
    }

    this.tableBDto.tableBOption = this.tableBOption;

    if(this.upperArmSelected == 0){
      errorMessage = errorMessage + "<br>Upper Arm"
    }
    if(this.lowerArmSelected == 0){
      errorMessage = errorMessage + "<br>Lower Arm"
    }
    if(this.wristSelected == 0){
      errorMessage = errorMessage + " <br>Wrist"
    }

    this.rebaService.tableBCalculation(this.tableBDto).subscribe(res => {
      if(!res || res == null){
        Swal.fire({
          title:'Error!',
          text:'You made incomplete or incorrect selection(s) for the calculation. Before proceeding to the next page, please select the missing body parts and/or make sure you have selected the correct adjustments.',
          icon:'error',
          confirmButtonText:'OK',
          html: errorMessage + "<br><br> Also check the adjustments. They must be chosen correctly."
        })
      }
      else {
      localStorage.setItem('tableB',res.toString())
      this.tableBScore = res;
      console.log(localStorage.getItem('tableB'))
      this.count = 3;
      }
    })
  }
  calculateClicked:boolean=false;
  calculateTableC(){
    this.calculateClicked = true;
    this.tableCDto.tableCOption1 = this.tableCCheckbox1;
    this.tableCDto.tableCOption2 = this.tableCCheckbox2;
    this.tableCDto.tableCOption3 = this.tableCCheckbox3;
    this.tableCDto.tableAScore = this.tableAScore;
    this.tableCDto.tableBScore = this.tableBScore;

    this.rebaService.rebaCalculation(this.tableCDto).subscribe(res => {
      localStorage.setItem('rebaScore',res.toString())
      this.rebaScore = res;
      console.log(localStorage.getItem('rebaScore'));
      if(res == 1){
        this.riskMessage = "Regligible risk."
      }
      else if(res == 2 || res == 3){
        this.riskMessage = "Low risk, change may needed."
      }
      else if(res == 4 || res == 5 || res == 6 || res == 7){
        this.riskMessage = "Medium risk, further investigation, change soon."
      }
      else if(res == 8 || res == 9 || res == 10) {
        this.riskMessage = "High risk, investigate and implement change."
      }
      else if(res >= 11){
        this.riskMessage = " Very high risk, implement change."
      }
      else {
        this.riskMessage = "";
      }
    })
  }
  newCalculation(){
    this.count = 1;
    this.neckSelected = 0;
    this.trunkSelected = 0;
    this.legSelected = 0;
    this.neckCheckbox1 = false;
    this.neckCheckbox2 = false;
    this.trunkCheckbox1 = false;
    this.trunkCheckbox2 = false;
    this.legCheckbox1 = false;
    this.legCheckbox2 = false;
    this.tableAOption = "";
    this.shockOrRapid = false;

    this.upperArmSelected = 0;
    this.lowerArmSelected = 0;
    this.wristSelected = 0;
    this.upperArmCheckbox1 = false;
    this.upperArmCheckbox2 = false;
    this.upperArmCheckbox3 = false;
    this.wristCheckbox = false;
    this.tableBOption = "";

    this.calculateClicked = false;
    this.tableCCheckbox1 = false;
    this.tableCCheckbox2 = false;
    this.tableCCheckbox3 = false;
    this.riskMessage = "";

    this.videoSrc = "";


  }
  newCalculationwLogin(){
    this.count = 1;
    this.neckSelected = 0;
    this.trunkSelected = 0;
    this.legSelected = 0;
    this.neckCheckbox1 = false;
    this.neckCheckbox2 = false;
    this.trunkCheckbox1 = false;
    this.trunkCheckbox2 = false;
    this.legCheckbox1 = false;
    this.legCheckbox2 = false;
    this.tableAOption = "";
    this.shockOrRapid = false;

    this.upperArmSelected = 0;
    this.lowerArmSelected = 0;
    this.wristSelected = 0;
    this.upperArmCheckbox1 = false;
    this.upperArmCheckbox2 = false;
    this.upperArmCheckbox3 = false;
    this.wristCheckbox = false;
    this.tableBOption = "";

    this.calculateClicked = false;
    this.tableCCheckbox1 = false;
    this.tableCCheckbox2 = false;
    this.tableCCheckbox3 = false;
    this.riskMessage = "";

    this.videoSrc = "";
    
    this.router.navigate(["login"])

  }
  rebaHelpButton(){
    window.open("../../../assets/foto/worksheet.png","REBA Worksheet","width=500,height=400")
  }
  
  videoSrc: string = "";

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files![0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.videoSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  defaultVideo(){
    this.videoSrc = "../../../assets/video/T-Shirt Manufacture.mp4"
  }
}
