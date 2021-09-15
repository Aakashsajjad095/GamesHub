import React,{useEffect,useState} from 'react';
import { Text, View,  SafeAreaView, StatusBar,FlatList,RefreshControl,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './style';
import {Colors} from '../../../../res/style/colors'
import Header from '../../../component/Header'
import NetInfo from "@react-native-community/netinfo";
import {useSelector,useDispatch} from 'react-redux'
import {fetchPropertyApi} from '../../../redux/actions/propertyAction'
import { getApiSerive } from "../../../util/getDataService";
import { postApiSerive } from "../../../util/postDataService";
import {storeLocalPropertyFun} from '../../../redux/actions/storeLocalPropertyAction';
import PopularCards from '../../../component/popularCards'
import CircleImage from '../../../component/CircleImage'
import GameCard from '../../../component/GameCard'
import {FONTS, SIZES } from '../../../../res/style/theme';
import LinearGradient from 'react-native-linear-gradient';
import OfflineNotice from '../../../component/OfflineNotice';
import gameLinks from '../../../../res/string/gameLinks.json'

const gameHome = (props) => {
const [homeData,setHomeData]=useState(["name","email"])
    // Dummy Data
    const [populor, setPopulor] = React.useState(gameLinks.trending);

  const [mostPlayed, setMostPlayed] = React.useState(gameLinks.mostPlayed);

const [tabs, setTabs] = useState([
  {id: '1', name: '😍 ALL'},
  {id: '2', name: '🔥 Hot'},
  {id: '3', name: '👑 New'},
  
]);
const [tabData,setTabData]=useState(gameLinks.all)
const [colorTrend, setColorTrend] = useState(["#BF012C","#ff928b","#D39C67","#ffac81"]);
const [color1, setColor1] = useState(["#20ded3","#ff928b","#a88beb"]);
const [color2, setColor2] = useState(["#f6fba2","#ffac81","#f8ceec"]);
const [tabId,setTabId]=useState(1);
const [offline,setOffline]=useState(false)



const PropertyRequest = useSelector(state => state.homeP.PropertyRequest)
const PropertySuccess = useSelector(state => state.homeP.PropertySuccess)


  const dispatch=useDispatch()
  useEffect(()=>{
const unsubscribe = NetInfo.addEventListener(state => {
  if(state.isConnected){
    setOffline(false)
  }else{
    setOffline(true)
  }
});
  },[])

function fetchHomeData(){
  var url='https://pasu.magxeen.com/public/getProperty'
  getApiSerive.getApiClass(url).then((res)=>{
  if(res.length>0){
    dispatch(fetchPropertyApi(res))
  }else{
    console.log("reslt not exist")
  }
})
}

  const onRefresh = () => {
   
 };

 function selectTab(status){
  setTabId(status.id)
  if(status.id==1){
    setTabData(gameLinks.all)
  }else if(status.id==2){
    setTabData(gameLinks.hot)
  }else{
    setTabData(gameLinks.new)
  }
  
 }


 const tabBar = () => {
  return (
    <View style={styles.tabbarView}>
      {tabs.map((status, index) => (
        <TouchableOpacity
          activeOpacity={0.9}
          key={index}
          onPress={() => selectTab(status)}>
            <LinearGradient colors={[tabId == status.id ?Colors.gold: color1[index],tabId == status.id ?'#ffd8cb':color2[index]]} style={styles.tabbarStyle}>
              <Text
                style={[
                  styles.matchstatusbartext,
                  {
                    color:
                    tabId == status.id ? Colors.white : Colors.black,
                  },
                ]}>
                {status.name}
              </Text>
            
          
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};



const renderPopuler=()=>{
  return(


<View>
<Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold }}>TRENDING</Text>
    <View style={styles.subContainer}> 
   
   
<FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={populor} 
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
         contentContainerStyle={{ paddingBottom: '1%' }}
        renderItem={({ item, index }) => {
          return (
            <PopularCards
item={item}
colorTrend={colorTrend}
index={index}
onPress={()=>{
  props.navigation.navigate('playGame',{
    item:item
  })

}}
/>
         );
        }}
        enableEmptySections={true}
        refreshControl={
          <RefreshControl
          style={{backgroundColor:'red'}}
            refreshing={PropertyRequest}
            onRefresh={() => onRefresh()}
          />
        }
        style={{ marginTop: 10 }}
        keyExtractor={(item, index) => index.toString()}

      />

    
</View>
</View>


  )
}
const renderMostPlayed=()=>{
  return(

<View>

<Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold }}>Most Played</Text>
    <View style={styles.subContainer}> 
   
   
<FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={mostPlayed} 
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
         contentContainerStyle={{ paddingBottom: '1%' }}
        renderItem={({ item, index }) => {
          return (
            <CircleImage
item={item}
index={index}
onPress={()=>{
  props.navigation.navigate('playGame',{
    item:item
  })
}}
/>
         );
        }}
        enableEmptySections={true}
        refreshControl={
          <RefreshControl
          style={{backgroundColor:'red'}}
            refreshing={PropertyRequest}
            onRefresh={() => onRefresh()}
          />
        }
        style={{ marginTop: 10 }}
        keyExtractor={(item, index) => index.toString()}

      />

    
</View>
</View>



  )
}

const renderGameCard=()=>{
  return(


    <View style={{justifyContent:'center',marginLeft:10}}> 
   
   
<FlatList
        showsHorizontalScrollIndicator={false}
        data={tabData} 
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
         contentContainerStyle={{ paddingBottom: '1%' }}
        renderItem={({ item, index }) => {
          return (
            <GameCard
item={item}
index={index}
onPress={()=>{
  props.navigation.navigate('playGame',{
    item:item
  })
}}
/>
         );
        }}
        enableEmptySections={true}
        refreshControl={
          <RefreshControl
          style={{backgroundColor:'red'}}
            refreshing={PropertyRequest}
            onRefresh={() => onRefresh()}
          />
        }
        style={{ marginTop: 10 }}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}

      />

    
</View>


  )
}



  return (
   
    <SafeAreaView style={styles.Container}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={Colors.white}
        barStyle="dark-content"
      />
  <Header
  title='Games Hub'
  />
  {offline?
  <OfflineNotice />
  :null}
  
<ScrollView>


{renderMostPlayed()}
{renderPopuler()}
<ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  >
{tabBar()}
</ScrollView>
{renderGameCard()}

</ScrollView>


     </SafeAreaView>
   
  )


}

export default gameHome;