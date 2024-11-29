import { useState } from "react"

import { Input } from "@/components/input"

import {useProductDatabase} from "@/database/useProductDatabase"

import { View, Button, Alert } from "react-native"

export default function Index() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [quantity,setQuantity] = useState("")
    const [products, setProducts] = useState([])

    const productDatabase = useProductDatabase()

    async function create() {
        try{
            if(isNaN(Number(quantity))){
                return Alert.alert("quantidade", "A quantidade Precisa ser um número!")            

            }

            const response = await productDatabase.create({
                name, 
                quantity: Number(quantity), 
            })
            
            Alert.alert("Produto cadastradi com o ID: " + response.insertedRowId)
        }   catch(error){
            console.log(error)
        }
    }




    return ( 
        <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}> 

            <Input placeholder="Nome" onChangeText={setName} value={name}/>  
            <Input 
                placeholder="quantidade" 
                onChangeText={setQuantity} 
                value={quantity}
            />
            <Button title= "Salvar" onPress={create}/>
        
        </View>
    )
}