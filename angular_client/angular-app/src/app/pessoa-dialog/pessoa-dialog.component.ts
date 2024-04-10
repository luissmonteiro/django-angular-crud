import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pessoa-dialog',
  templateUrl: './pessoa-dialog.component.html',
  styleUrls: ['./pessoa-dialog.component.css']
})
export class PessoaDialogComponent {

  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder,
     public dialogRef: MatDialogRef<PessoaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
     {
      this.form = this.fb.group({
        nome: [data?.nome, [Validators.required, Validators.minLength(2)]],
        cpf: [data?.cpf, [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]],
        data_nasc: [data?.data_nasc, Validators.required],
        sexo: [data?.sexo, [Validators.required, Validators.maxLength(1)]],
        peso: [data?.peso, [Validators.required, Validators.min(1)]],
        altura: [data?.altura, [Validators.required, Validators.min(0.3)]],
        id: [data?.id]
      });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  criarPessoa(): void {
    this.http.post('http://localhost:8000/pessoa/criar/', this.form.value).subscribe(data => {
      // console.log('DATA: ', data);
      
    }, error => console.error(error));
  }
}
