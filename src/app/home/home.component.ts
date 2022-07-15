import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Contatos {
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profileForm!: FormGroup;
  listaDeContatos: Contatos[] = [];
  displayedColumns: string[] = ['nome', 'telefone'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup() {
    this.profileForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  salvar(value: any) {
    this.listaDeContatos.push(value);
    this.listaDeContatos = [...this.listaDeContatos]
  }

  resetForm() {
    this.profileForm.reset();
    Object.keys(this.profileForm.controls).forEach(campo => {
      const controle: any = this.profileForm.get(campo);
      controle.markAsUntouched();
      controle.markAsPristine();
    });
  }

}
