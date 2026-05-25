1)useState component ki state ko store aur update karta hai aur state change hone par component re-render karta hai.
const [count, setCount] = useState(0); - count → current state value - setCount() → state update function

2. useEffect component lifecycle ke andar side effects handle karta hai.
   Side effects kya hote hain? - API calls - Event listeners - Timers - Local storage - DOM manipulation - Subscription cleanup

3. useRef Re-render ke bina value ya DOM reference maintain karta hai.
   const inputRef=useRef();
   return(
   <>
   <input ref={inputRef}/>
   <button onClick={()=>inputRef.current.focus()} >
    Focus
   </button>
   </>
   )

4. useContext Props drilling avoid karne ke liye global data share karta hai.
   Real-world:
   - Theme
   - User login
   - Language
   - Auth data
   - Create Context
     import {createContext} from "react";
     export const UserContext=createContext();
     Provider:
     <UserContext.Provider value="Rahul">
      <Home/>
     </UserContext.Provider>

     Consume:
     import {useContext} from "react";
     const user=useContext(UserContext);
     console.log(user)
     Angular equivalent:
     Service + Dependency Injection

5. useMemo Expensive calculation ko cache karta hai taaki unnecessary recalculation na ho.
   - Filtering large data
   - Sorting
   - Heavy calculations

6. useCallback Function ko cache karta hai taaki har render pe new function create na ho.
    const handleClick=useCallback(()=>{
      console.log("Clicked")
    },[])

7. useReducer Complex state management ke liye use hota hai.

8. useLayoutEffect useEffect jaisa hai, but browser paint hone se pehle run karta hai.

9. custom hooks Common logic ko reusable banane ke liye custom hook create karte hain.

| Hook            |             Purpose |        Angular Similar |
| --------------- | ------------------: | ---------------------: |
| useState        |    State management |     Component property |
| useEffect       |        Side effects |   ngOnInit/ngOnDestroy |
| useRef          | DOM/value reference |             @ViewChild |
| useContext      |        Global state |           Service + DI |
| useMemo         |        Cache values |              Pure pipe |
| useCallback     |     Cache functions |   No direct equivalent |
| useReducer      |       Complex state |           NgRx reducer |
| useLayoutEffect |    Run before paint | Lifecycle DOM handling |
| Custom Hook     |      Reusable logic |         Service/helper |

Interview trick:
 - State change → useState
 - API/lifecycle → useEffect
 - DOM access → useRef
 - Global data → useContext
 - Performance → useMemo/useCallback
 - Complex state → useReducer