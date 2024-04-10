import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { PessoaDialogComponent } from './pessoa-dialog/pessoa-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  pessoas: any;


  searchText = '';
  searchTimeout: any = null;
  
  resultIsSearch: boolean = false;
  dialogOpened: boolean = false;

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.getPessoas();
  }

  onSearchTextChange(searchText: string) {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.searchText = searchText;
      this.filterPessoas();
    }, 300);

  }

  filterPessoas() {
    if (this.searchText) {
      this.http.get(`http://localhost:8000/pessoa/buscar/${this.searchText}/`).subscribe(data => {
        this.pessoas = data;
        this.resultIsSearch = true;
      })
    } else {
      this.resultIsSearch = false;
      this.getPessoas();
    }
  }


  getPessoas() {
    this.http.get('http://localhost:8000/pessoa/listar/').subscribe(data => {
      this.pessoas = data;
    }, error => console.error(error));
  }

  editarPessoa(pessoa: any) {
    const dialogRef = this.dialog.open(PessoaDialogComponent, {
      width: '80vw',
      height: '80vh',
      data: pessoa
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result?.id) {
        window.location.reload();
      }
      console.log(`Dialog result: ${result}`);
      this.dialogOpened = false;
    });
  };
  
  excluirPessoa(pessoa: any) {
    const confirmDelete = window.confirm('Are you sure you want to delete this person?');
    if (confirmDelete) {
      this.http.post(`http://localhost:8000/pessoa/deletar/${pessoa.id}/`, {}).subscribe(
        () => {
          window.location.reload();
        },
        error => {
          console.error(error);
        }
      );
    }

  };
  adicionarPessoa() {
    this.dialogOpened = true;
    const dialogRef = this.dialog.open(PessoaDialogComponent, {
      width: '80vw',
      height: '80vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.id) {
        this.pessoas.push(result);
        window.location.reload();
      }
      console.log(`Dialog result: ${result}`);
      this.dialogOpened = false;
    });
  };

  calculateAge(birthdate: string): number {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
