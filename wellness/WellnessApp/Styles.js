import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 input: {
   width: '80%',
   margin: 10,
   padding: 10,
   borderWidth: 1,
   borderColor: 'gray',
   borderRadius: 15
 },
 titleText: {
   fontSize: 30,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 10
 },
 surveyText: {
   fontSize: 30,
   justifyContent: 'center',
   padding: 10
 },
 smallText: {
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
 },
 sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1, 
    marginHorizontal: 10,
 },
 unhappyButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#385fec',
    alignItems: 'center',
    justifyContent: 'center',
 },
 neutralButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#c0bec0',
    alignItems: 'center',
    justifyContent: 'center',
 },
 happyButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#7ae7f1',
    alignItems: 'center',
    justifyContent: 'center',
 },
 miniUnhappyButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#385fec',
    alignItems: 'center',
    justifyContent: 'center',
 },
 miniNeutralButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#c0bec0',
    alignItems: 'center',
    justifyContent: 'center',
 },
 miniHappyButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#7ae7f1',
    alignItems: 'center',
    justifyContent: 'center',
 },
 mainButton: {
    width:300,
    height:60,
    backgroundColor:'#609bc2',
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
 },
 buttonText: {
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
 },
 miniButtonText: {
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
 },
 silhouetteContainer: {
    flex: 1,
    maxHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
 },
 bodySilhouette: {
    height: 400,
    aspectRatio: 0.34,
    alignContent: 'center',
    justifyContent: 'center',
 }
});