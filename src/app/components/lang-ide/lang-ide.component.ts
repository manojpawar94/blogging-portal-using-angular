import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LanguageIde } from 'src/app/beans/language.ide.beans';
import { FileReaderService } from 'src/app/services/file-reader.service';

@Component({
  selector: 'app-lang-ide',
  templateUrl: './lang-ide.component.html',
  styleUrls: ['./lang-ide.component.css']
})
export class LangIdeComponent implements OnInit {

  @Input("language") language: string = "golang"

  languageIdes: LanguageIde[] = []

  constructor(private fileReaderSerivce: FileReaderService) { }

  ngOnInit(): void {
    this.fileReaderSerivce.fetchContent(`blogs/${this.language}-ide.json`)
      .subscribe(response => this.languageIdes = JSON.parse(response))
  }

}
