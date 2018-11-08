require './key'
require "net/http"
require "uri"
require './method'

puts order('BUY','820000','0.002')
puts order('SELL','830000','0.002')