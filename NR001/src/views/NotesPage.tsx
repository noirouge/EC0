import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IProps} from '../core/interface/index';

function NotesPage({navigation}: IProps): JSX.Element {
  const [search, setSearch] = useState('');

  const onSubmitSearch = () => {
    console.log('SUBMIT SEARCH', search);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const goConfig = () => {
    navigation.navigate('ConfigPage');
  };

  const goNew = () => {
    navigation.navigate('NotePage');
  }

  const waka = [
    {
      id: '1',
      title: 'Mono1',
      text: 'El mono es un mamífero que pertenece al orden de los primates. Se caracteriza por su habilidad para trepar árboles y su cola prensil, la cual le permite agarrarse de las ramas. Los monos se encuentran en diversas partes del mundo y existen diferentes especies, como el chimpancé, gorila y orangután.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'León2',
      text: 'El león es un animal carnívoro que habita en las sabanas y llanuras de África. Es conocido por su melena, que es más pronunciada en los machos, y su gran fuerza. Los leones viven en grupos llamados manadas y se alimentan principalmente de presas como antílopes y cebras.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      title:
        'Elefante3 sfddsfsfd sfddsafdsaf PIZZA PDSADSA SAFSAjn asdjksadhksajdksa sajdhkjshdakjsdak sadjhsdakjdshkjdsah sadhdsakjhdska sadfksdafnsldafnlsafnjsd asjdakfnskdajfsjkdafksjafs dfsdjfbdshafbsda',
      text: 'El elefante es el animal terrestre más grande que existe. Se caracteriza por su trompa larga y flexible, sus grandes orejas y sus colmillos. Los elefantes son animales sociales y viven en manadas lideradas por una hembra. Son herbívoros y se alimentan principalmente de plantas, hierbas y ramas.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      title: 'Gorila4',
      text: 'El gorila es un primate que habita en las selvas y bosques de África Central. Es uno de los animales más grandes y poderosos de la familia de los primates. Los gorilas viven en grupos llamados tropas, liderados por un macho dominante. Son herbívoros y se alimentan principalmente de hojas, frutas y tallos.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5',
      title: 'Jirafa5',
      text: 'La jirafa es un mamífero de cuello largo que habita en las sabanas y áreas arboladas de África. Se destaca por su altura y sus manchas en el pelaje. Las jirafas son herbívoras y se alimentan principalmente de hojas y brotes de árboles. Además, tienen una lengua larga y prensil que les permite alcanzar las hojas más altas.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '6',
      title: 'Delfín6',
      text: 'El delfín es un mamífero marino conocido por su inteligencia y su habilidad para nadar y saltar en el agua. Se encuentran en océanos de todo el mundo y existen diferentes especies de delfines. Son animales sociales y se comunican mediante sonidos y gestos. Los delfines se alimentan principalmente de peces y calamares.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '7',
      title: 'Tigre7',
      text: 'El tigre es un felino carnívoro que habita en diversas regiones de Asia. Es uno de los grandes depredadores más imponentes y se caracteriza por su pelaje anaranjado con rayas negras. Los tigres son cazadores solitarios y se alimentan principalmente de ungulados como ciervos y jabalíes. Son animales en peligro de extinción debido a la pérdida de hábitat y la caza furtiva.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '8',
      title: 'Elefante8',
      text: 'El elefante es el animal terrestre más grande que existe. Hay dos especies principales de elefantes: el elefante africano y el elefante asiático. Son conocidos por su trompa larga y flexible, así como por sus colmillos. Los elefantes viven en manadas y son herbívoros, consumiendo grandes cantidades de vegetación diariamente. Son animales inteligentes y sociales.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '9',
      title: 'Cebra9',
      text: 'La cebra es un animal herbívoro que se encuentra en las sabanas de África. Se caracteriza por su pelaje rayado blanco y negro, que es único para cada individuo. Las cebras viven en grupos llamados manadas y se alimentan principalmente de pasto. Su patrón de rayas les brinda camuflaje y ayuda a disuadir a los depredadores.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '10',
      title: 'Pingüino10',
      text: 'El pingüino es un ave marina que habita en el hemisferio sur, especialmente en regiones frías como la Antártida. Son conocidos por su habilidad para nadar y su forma característica de caminar erguidos. Los pingüinos se alimentan de peces y calamares, y forman colonias para reproducirse y protegerse del frío. Son animales adaptados a la vida acuática y tienen un plumaje denso que los ayuda a mantenerse calientes.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '11',
      title: 'León11',
      text: 'El león es un felino majestuoso y poderoso que se encuentra principalmente en África. Es conocido por su melena en los machos, que les otorga un aspecto imponente. Los leones viven en grupos llamados manadas y son depredadores carnívoros. Cazan en equipo y se alimentan principalmente de grandes herbívoros como cebras y ñus. Son considerados como el rey de la selva.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '12',
      title: 'Jirafa12',
      text: 'La jirafa es un animal herbívoro que habita en las llanuras de África. Es conocida por su largo cuello y sus patrones de manchas en su piel. Las jirafas se alimentan principalmente de hojas de árboles y su cuello largo les permite alcanzar vegetación en las copas de los árboles. Son animales sociales que viven en grupos llamados manadas y pueden alcanzar alturas impresionantes.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '13',
      title: 'Hipopótamo13',
      text: 'El hipopótamo es un mamífero semiacuático que se encuentra en las regiones de África. Es conocido por su cuerpo robusto y su boca grande llena de dientes afilados. A pesar de su apariencia tranquila, los hipopótamos son animales agresivos y territoriales. Pasan la mayor parte del tiempo en el agua y se alimentan de hierba durante la noche. Son considerados como uno de los animales más peligrosos de África.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '14',
      title: 'Panda14',
      text: 'El panda es un oso nativo de China y se caracteriza por su distintivo pelaje blanco y negro. Son animales herbívoros que se alimentan principalmente de bambú. Los pandas son símbolos de conservación y protección de la vida silvestre. Debido a la destrucción de su hábitat y a la caza furtiva, están en peligro de extinción y se consideran una especie vulnerable.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '15',
      title: 'Elefante15',
      text: 'El elefante es el animal terrestre más grande que existe. Se caracteriza por su gran tamaño, sus largas trompas y sus colmillos. Los elefantes son animales sociales y viven en manadas lideradas por una hembra adulta. Son herbívoros y se alimentan principalmente de hierba, hojas, ramas y frutas. Son considerados animales inteligentes y tienen una memoria impresionante.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '16',
      title: 'Canguro16',
      text: 'El canguro es un marsupial que se encuentra en Australia. Son conocidos por su capacidad para saltar largas distancias gracias a sus patas traseras fuertes. Los canguros son herbívoros y se alimentan principalmente de hierba y hojas. Tienen una bolsa en el vientre donde llevan a sus crías. Los canguros machos también se destacan por su habilidad para luchar utilizando sus patas delanteras y su cola.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '17',
      title: 'Tigre17',
      text: 'El tigre es un felino magnífico y poderoso que habita en diversas regiones de Asia. Es conocido por sus rayas únicas en su piel y su destreza como cazador. Los tigres son carnívoros y se alimentan principalmente de presas como ciervos y jabalíes. Son animales solitarios y territoriales. Lamentablemente, muchas especies de tigres están en peligro de extinción debido a la caza furtiva y la destrucción de su hábitat.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '18',
      title: 'Cocodrilo18',
      text: 'El cocodrilo es un reptil acuático que se encuentra en diversos lugares del mundo, especialmente en zonas tropicales. Son conocidos por su aspecto temible y su mandíbula llena de dientes afilados. Los cocodrilos son depredadores poderosos y se alimentan de una variedad de presas, incluyendo peces, aves y mamíferos. Pasan la mayor parte del tiempo en el agua y tienen una excelente habilidad para nadar y acechar a sus presas.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '19',
      title: 'Tortuga19',
      text: 'La tortuga es un reptil que se encuentra en diversos hábitats, tanto terrestres como acuáticos. Se caracterizan por su caparazón protector y su lenta movilidad. Las tortugas son animales longevos y tienen una gran variedad de especies en todo el mundo. Algunas tortugas son terrestres y se alimentan de plantas, mientras que otras son acuáticas y se alimentan de plantas y pequeños animales. Son conocidas por su longevidad y su capacidad para retirarse dentro de su caparazón para protegerse.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '20',
      title: 'León20',
      text: 'El león es un felino majestuoso y poderoso que habita en las regiones de África y Asia. Son conocidos por ser los reyes de la selva debido a su gran tamaño y su melena distintiva en los machos. Los leones son animales sociales que viven en manadas lideradas por un macho dominante. Son carnívoros y se alimentan principalmente de presas como cebras, antílopes y ñus. Los leones son considerados símbolos de fuerza y coraje.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '1',
      title: 'Mono1',
      text: 'El mono es un mamífero que pertenece al orden de los primates. Se caracteriza por su habilidad para trepar árboles y su cola prensil, la cual le permite agarrarse de las ramas. Los monos se encuentran en diversas partes del mundo y existen diferentes especies, como el chimpancé, gorila y orangután.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'León2',
      text: 'El león es un animal carnívoro que habita en las sabanas y llanuras de África. Es conocido por su melena, que es más pronunciada en los machos, y su gran fuerza. Los leones viven en grupos llamados manadas y se alimentan principalmente de presas como antílopes y cebras.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      title:
        'Elefante3 sfddsfsfd sfddsafdsaf PIZZA PDSADSA SAFSAjn asdjksadhksajdksa sajdhkjshdakjsdak sadjhsdakjdshkjdsah sadhdsakjhdska sadfksdafnsldafnlsafnjsd asjdakfnskdajfsjkdafksjafs dfsdjfbdshafbsda',
      text: 'El elefante es el animal terrestre más grande que existe. Se caracteriza por su trompa larga y flexible, sus grandes orejas y sus colmillos. Los elefantes son animales sociales y viven en manadas lideradas por una hembra. Son herbívoros y se alimentan principalmente de plantas, hierbas y ramas.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      title: 'Gorila4',
      text: 'El gorila es un primate que habita en las selvas y bosques de África Central. Es uno de los animales más grandes y poderosos de la familia de los primates. Los gorilas viven en grupos llamados tropas, liderados por un macho dominante. Son herbívoros y se alimentan principalmente de hojas, frutas y tallos.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5',
      title: 'Jirafa5',
      text: 'La jirafa es un mamífero de cuello largo que habita en las sabanas y áreas arboladas de África. Se destaca por su altura y sus manchas en el pelaje. Las jirafas son herbívoras y se alimentan principalmente de hojas y brotes de árboles. Además, tienen una lengua larga y prensil que les permite alcanzar las hojas más altas.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '6',
      title: 'Delfín6',
      text: 'El delfín es un mamífero marino conocido por su inteligencia y su habilidad para nadar y saltar en el agua. Se encuentran en océanos de todo el mundo y existen diferentes especies de delfines. Son animales sociales y se comunican mediante sonidos y gestos. Los delfines se alimentan principalmente de peces y calamares.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '7',
      title: 'Tigre7',
      text: 'El tigre es un felino carnívoro que habita en diversas regiones de Asia. Es uno de los grandes depredadores más imponentes y se caracteriza por su pelaje anaranjado con rayas negras. Los tigres son cazadores solitarios y se alimentan principalmente de ungulados como ciervos y jabalíes. Son animales en peligro de extinción debido a la pérdida de hábitat y la caza furtiva.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '8',
      title: 'Elefante8',
      text: 'El elefante es el animal terrestre más grande que existe. Hay dos especies principales de elefantes: el elefante africano y el elefante asiático. Son conocidos por su trompa larga y flexible, así como por sus colmillos. Los elefantes viven en manadas y son herbívoros, consumiendo grandes cantidades de vegetación diariamente. Son animales inteligentes y sociales.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '9',
      title: 'Cebra9',
      text: 'La cebra es un animal herbívoro que se encuentra en las sabanas de África. Se caracteriza por su pelaje rayado blanco y negro, que es único para cada individuo. Las cebras viven en grupos llamados manadas y se alimentan principalmente de pasto. Su patrón de rayas les brinda camuflaje y ayuda a disuadir a los depredadores.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '10',
      title: 'Pingüino10',
      text: 'El pingüino es un ave marina que habita en el hemisferio sur, especialmente en regiones frías como la Antártida. Son conocidos por su habilidad para nadar y su forma característica de caminar erguidos. Los pingüinos se alimentan de peces y calamares, y forman colonias para reproducirse y protegerse del frío. Son animales adaptados a la vida acuática y tienen un plumaje denso que los ayuda a mantenerse calientes.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '11',
      title: 'León11',
      text: 'El león es un felino majestuoso y poderoso que se encuentra principalmente en África. Es conocido por su melena en los machos, que les otorga un aspecto imponente. Los leones viven en grupos llamados manadas y son depredadores carnívoros. Cazan en equipo y se alimentan principalmente de grandes herbívoros como cebras y ñus. Son considerados como el rey de la selva.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '12',
      title: 'Jirafa12',
      text: 'La jirafa es un animal herbívoro que habita en las llanuras de África. Es conocida por su largo cuello y sus patrones de manchas en su piel. Las jirafas se alimentan principalmente de hojas de árboles y su cuello largo les permite alcanzar vegetación en las copas de los árboles. Son animales sociales que viven en grupos llamados manadas y pueden alcanzar alturas impresionantes.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '13',
      title: 'Hipopótamo13',
      text: 'El hipopótamo es un mamífero semiacuático que se encuentra en las regiones de África. Es conocido por su cuerpo robusto y su boca grande llena de dientes afilados. A pesar de su apariencia tranquila, los hipopótamos son animales agresivos y territoriales. Pasan la mayor parte del tiempo en el agua y se alimentan de hierba durante la noche. Son considerados como uno de los animales más peligrosos de África.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '14',
      title: 'Panda14',
      text: 'El panda es un oso nativo de China y se caracteriza por su distintivo pelaje blanco y negro. Son animales herbívoros que se alimentan principalmente de bambú. Los pandas son símbolos de conservación y protección de la vida silvestre. Debido a la destrucción de su hábitat y a la caza furtiva, están en peligro de extinción y se consideran una especie vulnerable.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '15',
      title: 'Elefante15',
      text: 'El elefante es el animal terrestre más grande que existe. Se caracteriza por su gran tamaño, sus largas trompas y sus colmillos. Los elefantes son animales sociales y viven en manadas lideradas por una hembra adulta. Son herbívoros y se alimentan principalmente de hierba, hojas, ramas y frutas. Son considerados animales inteligentes y tienen una memoria impresionante.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '16',
      title: 'Canguro16',
      text: 'El canguro es un marsupial que se encuentra en Australia. Son conocidos por su capacidad para saltar largas distancias gracias a sus patas traseras fuertes. Los canguros son herbívoros y se alimentan principalmente de hierba y hojas. Tienen una bolsa en el vientre donde llevan a sus crías. Los canguros machos también se destacan por su habilidad para luchar utilizando sus patas delanteras y su cola.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '17',
      title: 'Tigre17',
      text: 'El tigre es un felino magnífico y poderoso que habita en diversas regiones de Asia. Es conocido por sus rayas únicas en su piel y su destreza como cazador. Los tigres son carnívoros y se alimentan principalmente de presas como ciervos y jabalíes. Son animales solitarios y territoriales. Lamentablemente, muchas especies de tigres están en peligro de extinción debido a la caza furtiva y la destrucción de su hábitat.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '18',
      title: 'Cocodrilo18',
      text: 'El cocodrilo es un reptil acuático que se encuentra en diversos lugares del mundo, especialmente en zonas tropicales. Son conocidos por su aspecto temible y su mandíbula llena de dientes afilados. Los cocodrilos son depredadores poderosos y se alimentan de una variedad de presas, incluyendo peces, aves y mamíferos. Pasan la mayor parte del tiempo en el agua y tienen una excelente habilidad para nadar y acechar a sus presas.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '19',
      title: 'Tortuga19',
      text: 'La tortuga es un reptil que se encuentra en diversos hábitats, tanto terrestres como acuáticos. Se caracterizan por su caparazón protector y su lenta movilidad. Las tortugas son animales longevos y tienen una gran variedad de especies en todo el mundo. Algunas tortugas son terrestres y se alimentan de plantas, mientras que otras son acuáticas y se alimentan de plantas y pequeños animales. Son conocidas por su longevidad y su capacidad para retirarse dentro de su caparazón para protegerse.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '20',
      title: 'León20',
      text: 'El león es un felino majestuoso y poderoso que habita en las regiones de África y Asia. Son conocidos por ser los reyes de la selva debido a su gran tamaño y su melena distintiva en los machos. Los leones son animales sociales que viven en manadas lideradas por un macho dominante. Son carnívoros y se alimentan principalmente de presas como cebras, antílopes y ñus. Los leones son considerados símbolos de fuerza y coraje.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableWithoutFeedback onPress={goConfig}>
          <Icon style={styles.iconMenu} name="gear" size={30} color="white" />
        </TouchableWithoutFeedback>
        <TextInput
          style={styles.search}
          value={search}
          onChangeText={handleSearch}
          onSubmitEditing={onSubmitSearch}
          placeholder="buscador..."
          placeholderTextColor="gray"
        />
      </View>
      <ScrollView>
      <View style={styles.scrollBottom}>
        </View>
        {waka.map((item, index) => (
          <View style={styles.notaContainer} key={index}>
            <TouchableWithoutFeedback>
              <View style={styles.nota}>
                <Text style={styles.notaTitle}>{item.title}</Text>
                <Text style={styles.notaDate}>{item.updatedAt.toString()}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ))}
        <View style={styles.scrollBottom}>
        </View>
      </ScrollView>
      <View style={styles.iconPlusContainer}>
      </View>
        <Icon onPress={goNew} style={styles.iconPlus} name="plus-circle" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  textWhite: {
    color: 'white',
  },
  menu: {
    width: '100%',
    height: 40,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#373636',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconMenu: {
    marginStart: 5,
    left: 0,
    position: 'absolute',
  },
  search: {
    color: 'white',
    width: '91%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#292929',
    position: 'absolute',
    left: 35,
    fontSize: 15,
    height: '100%',
    backgroundColor: '#171717',
  },
  nota: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#292929',
    backgroundColor: '#181818',
    margin: 5,
    width: '100%',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  notaTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    height: 50,
    width: '80%',
  },
  notaDate: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    fontSize: 10,
  },
  notaContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlus: {
    color: '#910025',
    fontSize: 75,
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
  iconPlusContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 9,
    right: 6,
    width: 60,
    height: 60,
    borderRadius: 50,
 
  },
  scrollBottom:{
    height: 20,
  }
});

export default NotesPage;
