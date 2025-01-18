# PI1_ROBO_INTERFACE

Este é o repositório do projeto da interface web para o robô sumô autônomo, desenvolvido em Flask.

## Configuração do Ambiente Local

Siga os passos abaixo para configurar e rodar o projeto localmente.

### 1. Pré-requisitos

- Python 3.10 ou superior instalado.
- Gerenciador de pacotes `pip` atualizado.
- Sistema operacional Linux

### 2. Clonar o Repositório

Clone este repositório em sua máquina local:

```bash
git clone <URL_DO_REPOSITORIO>
```
```bash
cd PI1_ROBO_INTERFACE
```

### 3. Criar e Ativar o Ambiente Virtual

```bash
python3 -m venv venv
```
```bash
source venv/bin/activate
```

Após ativar, você verá algo como (venv) no início do seu terminal.

### 4. Instalar Dependências

Com o ambiente virtual ativo, instale as dependências listadas no requirements.txt:

```bash
pip install -r requirements.txt
```

### 5. Rodar a Aplicação

Execute a aplicação Flask localmente:

```bash
python run.py
```

## Boas Práticas

- Sempre ative o ambiente virtual antes de trabalhar no projeto:

```bash
source venv/bin/activate
```

- Após instalar novas dependências, atualize o requirements.txt:

```bash
pip freeze > requirements.txt
```

- Nunca versione a pasta venv/. Ela já está listada no .gitignore.