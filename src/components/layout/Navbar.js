import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">Projeto Final Dapps Ethereum</h4>
                <p className="text-white">Proof of Digital Existence</p>
                <p className="text-muted">
                  O IPFS e o Blockchain são uma combinação perfeita. Por quê?
                  Você pode endereçar grandes quantidades de dados com o IPFS e
                  colocar o links IPFS permanentes e imutáveis ​​em uma
                  transação de blockchain.Isso registrará o carimbo de data e
                  hora e protegerá seu conteúdo, sem a necessidade de coloque os
                  na própria cadeia. Agora você tem indiscutível prova de que
                  sua imagem existia no momento em que foi carregada.
                </p>
                <div className="copyright text-white mt-3">
                  <p className="mbr-text mbr-fonts-style display-7">
                    © Copyright 2020 Todos os direitos reservados, UFERSA
                  </p>
                </div>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Mais informações</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Ethereum"
                      className="text-white"
                    >
                      Ethereum
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Decentralized_application"
                      className="text-white"
                    >
                      Aplicações descentralizadas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Smart_contract"
                      className="text-white"
                    >
                      Contratos inteligentes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/InterPlanetary_File_System"
                      className="text-white"
                    >
                      IPFS - InterPlanetary File System
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <strong>
                SIGVI – Sistema de Gestão e Validação de Mídias de Imagem Dapps
                Ethereum + IPFS
              </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
