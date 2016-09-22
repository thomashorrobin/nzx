require 'active_resource' 

class Party < ActiveResource::Base
  self.site = "http://159.203.108.59:80/api/"
  self.format = :json
end