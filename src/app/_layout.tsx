import { Slot } from "expo-router"
import { SQLiteProvider } from "expo-sqlite"

import { initializeDatabase } from "@/database/initializeDatabase"

export default function Layout(){
    return  (
        <SQLiteProvider databaseName="meudatabase.db" onInit={initializeDatabase}>
            
        <Slot /> 
        
        </SQLiteProvider>
        
    )
}