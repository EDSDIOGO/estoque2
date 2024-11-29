import { Input } from "@/components/input"
import { View, Button } from "react-native"

export default function Index() {
    return ( 
        <View style={{ flex: 1, justifyContent: "center", 
        padding: 32, gap: 16 }}> 

            <Input placeholder="Nome" />  
            <Input placeholder="quantidade" />
            <Button title= "Salvar"/>
        
        </View>
    )
}