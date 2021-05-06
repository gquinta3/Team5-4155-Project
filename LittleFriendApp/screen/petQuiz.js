import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../res/validColors';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Take a quiz to find your compatible Dog!'
    },
    
    {
        questionType: 'SelectionGroup',
        questionText:
            'What size of a dog are you looking for?',
        questionId: 'dogSize',
        options: [
            {
                optionText: 'Small',
                value: '1'
            },
            {
                optionText: 'Medium',
                value: '2'
            },
            {
                optionText: 'Large',
                value: '3'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'How big is your outdoor space?',
        questionId: 'place1',
        options: [
            {
                optionText: 'I don’t have a secure outdoor space',
                value: '1'
            },
            {
                optionText: 'Small or Medium securec outdoor space',
                value: '2'
            },
            {
                optionText: 'Large secured outdoor space',
                value: '3'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Is your home a secure, and comfort place for a dog?',
        questionId: 'place2',
        options: [
            {
                optionText: 'My home is not secure nor safe',
                value: '1'
            },
            {
                optionText: 'My home is secure and safe',
                value: '2'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'How often are you active throughout the week?',
        questionId: 'exercise',
        options: [
            {
                optionText: 'Not very activeI don’t have a secure outdoor space',
                value: '1'
            },
            {
                optionText: 'Spend some time outside and stay active',
                value: '2'
            },
            {
                optionText: 'I love the outdoors and I love to stay active',
                value: '3'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'How much time are you willing to devote for your new dog?',
        questionId: 'time',
        options: [
            {
                optionText: 'Very busy and have a little amount of free time',
                value: '1'
            },
            {
                optionText: 'Before and afterwork I have free time',
                value: '2'
            },
            {
                optionText: 'Not busy and have a lot of free time',
                value: '3'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'How much are willing to spend on your new dog on a monthly basis?',
        questionId: 'spend',
        options: [
            {
                optionText: 'Less than $100 per month',
                value: '1'
            },
            {
                optionText: 'Between $100-200 per month',
                value: '2'
            },
            {
                optionText: 'More than $200 per month',
                value: '3'
            }
        ]
    },

    {
        questionType: 'Info',
        questionText: 'That is all for the survey, tap finish to see your results!'
    },
];

export default class petQuiz extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: '#90ee90',
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Sample Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: '#ff8c00', answersSoFar: '' };
    }

    onSurveyFinished(answers) {

        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('surveyComplete', { surveyAnswers: answersAsObj });
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the 
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is 
     *  is restricted (age, geo-fencing) from your app.
     */
    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={'#000000'}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={'#000000'}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={'#000000'}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={'#000000'}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={'#000000'}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? '#0000ff' : '#ff8c00'}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, value, placeholder, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={1}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, placeholder, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            placeholder={placeholder}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}    
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                    
                </View>
                
<<<<<<< HEAD
                {/* <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView> */}
=======
             
>>>>>>> 324a8707550bdba7ebf3f868ddfc72f012e00e51
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        
        elevation: 20,
        borderRadius: 10,
        flex: 1, 
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    background: {
        flex: 1,
        minHeight: 800,
        maxHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});
