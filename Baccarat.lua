

base=0.00001
tie=0
player=base
banker=0
hl=0
function dobet()
hl=hl+1
if hl>=10000 then
  hl=0
resetseed()
end
  if (win) then
    tie=0
    player=base
    banker=0
  else
    tie=0
    player=player*2
   banker=0
  end
end         
                
