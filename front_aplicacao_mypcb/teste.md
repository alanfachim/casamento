# Serviço de Pedidos de Crédito

Esse serviço é uma aplicação web que permite gerenciar pedidos de crédito de clientes de um banco. O serviço utiliza o framework Spring Boot para desenvolver uma API REST que expõe os recursos e as operações relacionados aos pedidos de crédito. O serviço também utiliza o banco de dados NoSQL DynamoDB da AWS para armazenar e manipular os dados dos pedidos de crédito. Além disso, o serviço utiliza o mecanismo de busca distribuído ElasticSearch para indexar e consultar os dados dos pedidos de crédito de forma eficiente e flexível.

## Arquitetura Hexagonal

O serviço segue a arquitetura hexagonal, que é um padrão arquitetural que visa isolar a lógica de domínio das dependências externas. A lógica de domínio é especificada em um núcleo de negócio, que chamamos de parte interna, com o resto sendo partes externas. O acesso à lógica de domínio a partir do exterior é feito através de portas e adaptadores. Esses componentes são modulares e intercambiáveis, o que aumenta a consistência do processamento e facilita a automação de testes.

O serviço é dividido em três camadas: aplicação (externa), domínio (interna) e infraestrutura (externa):

- Através da camada de aplicação, o usuário ou qualquer outro programa interage com a aplicação. Essa área deve conter coisas como interfaces de usuário, controladores RESTful e bibliotecas de serialização JSON. Ela inclui tudo que expõe a entrada para a nossa aplicação e orquestra a execução da lógica de domínio.
- Na camada de domínio, mantemos o código que toca e implementa a lógica de negócio. Esse é o núcleo da nossa aplicação. Essa camada deve ser isolada tanto da parte de aplicação quanto da parte de infraestrutura. Além disso, ela deve conter interfaces que definem a API para se comunicar com partes externas, como o banco de dados, com as quais o domínio interage.
- Finalmente, a camada de infraestrutura é a parte que contém tudo que a aplicação precisa para funcionar, como configuração do banco de dados ou configuração do Spring. Ela também implementa as interfaces dependentes da infraestrutura da camada de domínio.

## Estrutura do Projeto

O projeto é composto por quatro módulos: application, domain, infrastructure e ms-launcher. Cada módulo tem sua própria estrutura de arquivos e classes, conforme descrito abaixo:

### application

Esse módulo contém as classes relacionadas à camada de aplicação, como controladores, serviços e DTOs. A estrutura de arquivos desse módulo é:


application ├── src │ └── main │ └── java │ └── com │ └── example │ └── mslibrary │ └── application │ ├── controller │ │ └── PedidoCreditoController.java │ ├── dto │ │ ├── PedidoCreditoDTO.java │ │ └── PedidoCreditoMapper.java │ └── service │ └── PedidoCreditoService.java ├── build.gradle └── settings.gradle


As principais classes desse módulo são:

- `PedidoCreditoController`: define os endpoints da API REST usando as anotações do Spring Boot. Essa classe tem métodos para criar, obter, atualizar e deletar um pedido de crédito no DynamoDB. Essa classe também tem um método para fazer uma consulta avançada no ElasticSearch usando vários critérios de filtragem e ordenação.
- `PedidoCreditoDTO`: representa um pedido de crédito com os seus atributos em formato DTO (Data Transfer Object). Essa classe é usada para transferir os dados dos pedidos entre as camadas de aplicação e infraestrutura.
- `PedidoCreditoMapper`: faz o mapeamento entre as classes `PedidoCredito` e `PedidoCreditoDTO`, usando a biblioteca MapStruct.
- `PedidoCreditoService`: implementa a lógica de negócio relacionada aos pedidos de crédito, usando as interfaces da camada de domínio e as classes da camada de infraestrutura.

### domain

Esse módulo contém as classes relacionadas à camada de domínio, como entidades, repositórios e portas. A estrutura de arquivos desse módulo é:

$ tree projeto
projeto
├── README.md
├── file001.txt
└───pasta1
    ├── file011.txt
    ├── file012.txt
    └───subpasta1
        ├── file111.txt
        ├── file112.txt
        └── ...

domain `domain
├── src
│   └── main
│       └── java
│           └── com
│               └── example
│                   └── mslibrary
│                       └── domain
│                           ├── entity
│                           │   ├── Order.java
│                           │   └── OrderItem.java
│                           ├── port
│                           │   ├── in
│                           │   │   ├── CreateOrderUseCase.java
│                           │   │   ├── DeleteOrderUseCase.java
│                           │   │   ├── GetOrderUseCase.java
│                           │   │   ├── ListOrdersUseCase.java
│                           │   │   └── UpdateOrderUseCase.java
│                           │   └── out
│                           │       ├── LoadOrderPort.java
│                           │       ├── PersistOrderPort.java
│                           │       └── SearchOrdersPort.java
│                           └── repository
│                               └── OrderRepository.java
├── build.gradle
└── settings.gradle
`


As principais classes desse módulo são:

- `Order`: representa um pedido de crédito com os seus atributos e métodos. Essa classe é a raiz do agregado do pedido, que contém uma lista de itens do pedido.
- `OrderItem`: representa um item do pedido com os seus atributos e métodos. Essa classe é uma entidade filha do agregado do pedido.
- `CreateOrderUseCase`: define a interface para o caso de uso de criar um novo pedido de crédito. Essa interface é implementada pela camada de aplicação e usa a porta `PersistOrderPort` para persistir o pedido na camada de infraestrutura.
- `DeleteOrderUseCase`: define a interface para o caso de uso de deletar um pedido de crédito pelo seu código. Essa interface é implementada pela camada de aplicação e usa a porta `LoadOrderPort` para carregar o pedido da camada de infraestrutura e a porta `PersistOrderPort` para deletar o pedido na camada de infraestrutura.
- `GetOrderUseCase`: define a interface para o caso de uso de obter um pedido de crédito pelo seu código. Essa interface é implementada pela camada de aplicação e usa a porta `LoadOrderPort` para carregar o pedido da camada de infraestrutura.
- `ListOrdersUseCase`: define a interface para o caso de uso de listar todos os pedidos de crédito. Essa interface é implementada pela camada de aplicação e usa a porta `LoadOrderPort` para carregar os pedidos da camada de infraestrutura.
- `UpdateOrderUseCase`: define a interface para o caso de uso de atualizar um pedido de crédito pelo seu código. Essa interface é implementada pela camada de aplicação e usa a porta `LoadOrderPort` para carregar o pedido da camada de infraestrutura e a porta `PersistOrderPort` para persistir o pedido na camada de infraestrutura.
- `LoadOrderPort`: define a interface para carregar um ou mais pedidos da fonte de dados. Essa interface é definida pela camada de domínio e implementada pela camada de infraestrutura, usando o repositório do DynamoDB ou o cliente do ElasticSearch.
- `PersistOrderPort`: define a interface para persistir ou deletar um pedido na fonte de dados. Essa interface é definida pela camada de domínio e implementada pela camada de infraestrutura, usando o repositório do DynamoDB ou o cliente do ElasticSearch.
- `SearchOrdersPort`: define a interface para fazer uma consulta avançada nos pedidos usando vários critérios de filtragem e ordenação. Essa interface é definida pela camada de domínio e implementada pela camada de infraestrutura, usando o cliente do ElasticSearch.
- `OrderRepository`: define a interface para o repositório do pedido, que estende a interface `CrudRepository` do Spring Data. Essa interface é usada pela camada de infraestrutura para interagir com o banco de dados DynamoDB.

### infrastructure

Esse módulo contém as classes relacionadas à camada de infraestrutura, como configurações, implementações das portas e adaptadores. A estrutura de arquivos desse módulo é:


infrastructure ├── src │
