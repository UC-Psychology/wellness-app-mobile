import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 surveyText: {
   fontSize: 30,
   alignItems: 'center',
   justifyContent: 'center',
 },
 smallText: {
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
 },
 unhappyButton: {
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: '#385fec',
    alignItems: 'center',
    justifyContent: 'center',
 },
 neutralButton: {
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: '#c0bec0',
    alignItems: 'center',
    justifyContent: 'center',
 },
 happyButton: {
    width: 80,
    height: 80,
    borderRadius: 60,
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
 }
});