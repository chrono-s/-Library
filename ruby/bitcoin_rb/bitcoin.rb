require './method'

#ifdoneOCO

puts my_money("BTC")["amount"]
while(1)
    current_price =  get_price
    puts current_price
    
    buy_price = 850000
    sellprice = 890000
    if (current_price > sellprice) && (my_money("BTC")["amount"] > 0.001) 
        puts "売ります。"
        order("SELL",sell_price,0.001)
    elsif (current_price > buyprice) && (my_money("JPY")["amount"] > 1000) 
        puts "買います。"
        order("BUY",buy_price,0.001)
    else
        puts "何もしません。。"
    end
    
    
    
    sleep(1)
end
