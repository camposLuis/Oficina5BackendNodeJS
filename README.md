# Teste Oficina5

<b>Participante:</b> Luís Campos

<b>Configurando o projeto para rodar na máquina local</b>

<b>1.</b> Baixe o projeto ou clone o repositório

- execute o seguinte comando para instalar as dependências do projeto:
  <b>yarn / npm install</b>

<b>2.</b> Instale o banco <b>Mysql</b> via docker ou localmente em sua máquina. Para instalar via docker execute o seguinte comando:

- docker run --name dbmysql -e MYSQL_USER=user -e MYSQL_ROOT_PASSWORD=secret-password -p 3306:3306 -d -t mysql:8.0.18

<b>3.</b> Feito os passos anteriores, renomear o arquivo <b>".env.example"</b> para <b>".env"</b>, logo a seguir preencha todas as variáveis de ambiemte no arquivo <b>".env"</b> de acordo com as instalações realizadas em sua máquina.

<b>4.</b> Com as variáveis de ambiente preenchidas execute o seguinte comando:

- <b>yarn sequelize db:migrate</b>

- Esse comando irá criar as tabelas no banco de dados. OBS.: o schema do banco de dados deverá ser criado manualmente, poderá utilizar o nome que desejar. Somente as tabelas serão criadas com o comando citado acima.

<b>5.</b> Para executar o projeto execute os seguintes comandos:

- <b>yarn dev</b> (inicializa a aplicação)

<b>6.</b> Por fim no diretório <b>src/database/util</b> existe os arquivos para popular a base de dados, para isso siga a seguinte sequencia: users -> posts -> comments -> albums. Essa sequencia deve ser executado no client do banco mysql.
